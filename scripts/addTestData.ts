import { Addressable } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const [deployer, founder, cofounder, investor, richUser, user, poorUser] = await ethers.getSigners();
  console.log("Виконуємо тестовий деплой від імені:", deployer.address);

  const unityFlowAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F"; 
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const companyManagerAddrs = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; 

  const UnityFlow = await ethers.getContractAt("UnityFlow", unityFlowAddress);
  const CompanyManager = await ethers.getContractAt("CompanyManager", companyManagerAddrs);
  const TokenUF = await ethers.getContractAt("TokenUF", tokenAddress);

  console.log("🔹 Роздача токенів користувачам...");
   // 🔸 1️⃣ Роздаємо токени користувачам
   const amount = ethers.parseUnits("5000", 18);
   const amountForRich = ethers.parseUnits("30000", 18);
 
   interface IRecipients {
     address: string,
     amount: bigint,
   }
 
   const recipients: IRecipients[] = [
     { address: founder.address, amount },
     { address: cofounder.address, amount },
     { address: investor.address, amount },
     { address: user.address, amount },
     { address: richUser.address, amount: amountForRich },
     { address: poorUser.address, amount: ethers.parseUnits("1", 18) }
   ];
 
   for (const recipient of recipients) {
     const tx = await TokenUF.connect(deployer).transfer(recipient.address, recipient.amount);
     await tx.wait();
     console.log(`✅ ${recipient.amount} токенів передано користувачу ${recipient.address}`);
   }

  const companyNames = ["Web3Tech", "GreenFuture", "AIStartup"];
  let companyContracts: any[] = [];

  console.log("🔹 Починаємо створення компаній...");


  const category = ["Tech","Web3","FinTech","Security","Marketing","Gaming","SaaS","E-commerce"];

  // 🔸 12️⃣ Реєструємо компанії
  companyContracts = await Promise.all(
    companyNames.map(async (name, index) => {
      console.log(`Реєстрація компанії: ${name}...`);
      const image = "https://picsum.photos/200";
      const description = `A decentralized company ${name}`;
      const cofounders: Addressable[] = [];
  
      // Викликаємо транзакцію для реєстрації компанії
      const tx = await UnityFlow.connect(founder).registerCompany(
        name, image, description, category[getRandomInt(0, category.length)], cofounders
      );
      console.log("Транзакція надіслана:", tx.hash);
      
      const receipt = await tx.wait();
      if (!receipt) {
        throw new Error(`❌ Не вдалося знайти транзакцію для ${name}`);
      }
      console.log("Транзакція підтверджена у блоці:", receipt.blockNumber);
    

      // Отримуємо події
      const filter = CompanyManager.filters.CompanyRegistered();
      const events = await CompanyManager.queryFilter(filter, receipt.blockNumber, receipt.blockNumber);

      // console.log(events)

      const event = events.find((e) => e.blockNumber === receipt.blockNumber);
      if (!event) {
        throw new Error(`❌ Подію CompanyRegistered не знайдено для ${name}`);
      }
  
      // console.log("Аргументи події:", events[0].args);
        
      const companyAddress = events[0].args[1];
      const companyContract = await ethers.getContractAt("Company", companyAddress);
  
      console.log(`✅ ${name} зареєстровано за адресою: ${companyAddress}`);
      return companyContract;
    })
  );

  
  console.log("🔹 Починаємо створення фондів для компаній...");

  // 🔸 3️⃣ Створюємо по 2 фонди для кожної компанії від імені засновника
  await Promise.all(
    companyContracts.map(async (company) => {
      console.log(`📌 Створюємо фонди для компанії: ${await company.name()}...`);
  
      await Promise.all(
        [1, 2].map(async (i) => {
          const goalUSD = (1000 * i).toString();
          const deadline = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;
  
          const tx = await company.connect(founder).createFundraising(
            `Фонд #${i} для ${await company.name()}`,
            "Опис фонду",
            "Категорія",
            goalUSD,
            deadline,
            "image_url"
          );
          await tx.wait();
  
          console.log(`✅ Фонд #${i} створено для компанії ${await company.name()}!`);
        })
      );
    })
  );
}

main().catch((error) => {
  console.error("❌ Помилка під час деплою тестових даних:", error);
  process.exitCode = 1;
});

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);  // Округлюємо вгору, щоб уникнути дробових значень
  max = Math.floor(max); // Округлюємо вниз, щоб залишитися в межах діапазону
  return Math.floor(Math.random() * (max - min + 1)) + min;
}