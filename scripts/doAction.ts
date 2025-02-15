import { Addressable, parseEther, parseUnits } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const [deployer, founder, cofounder, investor, richUser, user, poorUser] = await ethers.getSigners();
  console.log("Виконуємо дії деплой від імені:", deployer.address);

  const unityFlowAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; 
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 

  const UnityFlow = await ethers.getContractAt("UnityFlow", unityFlowAddress);
  const TokenUF = await ethers.getContractAt("TokenUF", tokenAddress);

  const greenFutureCompany = await ethers.getContractAt("Company", "0x309e59bAba6449b96B2164425adde63577C98506");

  // const ethers_to_invest = parseEther("5");
  // const tx_invest_eth = await greenFutureCompany.connect(investor).investETH({ value: ethers_to_invest });
  // await tx_invest_eth.wait()

  // const tokens_to_invest = parseUnits("500");
  // const tx_approve_for_contract = await TokenUF.connect(investor).approve(greenFutureCompany.target, tokens_to_invest);
  // await tx_approve_for_contract.wait();

  // const tx_invest_uf = await greenFutureCompany.connect(investor).investUF(tokens_to_invest);
  // await tx_invest_uf.wait()

  // const deadline = Math.floor(Date.now() / 1000) + 65;

  // const tx = await greenFutureCompany.connect(founder).createFundraising(
  //   `Фонд #4 для GreenFuture`,
  //   "Опис фонду",
  //   "Категорія",
  //   5000n,
  //   deadline,
  //   "https://picsum.photos/200"
  // );
  // await tx.wait();

  const fundraising_4_address = await greenFutureCompany.fundraisers((await greenFutureCompany.fundraisingCount() - 1n));

  const fundraising_4 = await ethers.getContractAt("Fundraising", fundraising_4_address);

  const tx_withdraw_eth = await greenFutureCompany.connect(founder).withdrawFromFundraising(fundraising_4.target);
  await tx_withdraw_eth.wait()

  // const tx_refund_eth = await fundraising_4.connect(user).refundETH();
  // await tx_refund_eth.wait()

  
  const eth_price = await fundraising_4.connect(deployer).getLatestETHPrice();
  const uf_price = await fundraising_4.connect(deployer).getLatestTokenPrice();

  const [ id, company, title, description, image, category, goalUSD, deadline, collectedETH, collectedUF, claimed ] = await fundraising_4.getDetails();

  console.log("eth_price: " + eth_price);
  console.log("uf_price: " + uf_price);

  console.log("collectedETH: " + collectedETH);
  console.log("collectedUF: " + collectedUF);

  function checkGoalReached() {
    const ethInUSD = collectedETH * eth_price / BigInt("1000000000000000000"); // Ділимо на 1e18
    const tokenInUSD = collectedUF * uf_price / BigInt("1000000000000000000"); // Ділимо на 1e18

    console.log("ETH в USD =", ethers.formatUnits(ethInUSD, 18)); // Виведе у нормальних USD
    console.log("UF в USD =", ethers.formatUnits(tokenInUSD, 18));
    console.log("Ціль USD =", ethers.formatUnits(goalUSD, 18));

    return ethInUSD + tokenInUSD >= goalUSD;
}

   console.log("is reached goal: " + checkGoalReached());

  // const ethers_to_donate_1 = parseEther("3");
  // const tx_donate_eth_1 = await fundraising_4.connect(richUser).donateETH({ value: ethers_to_donate_1 });
  // await tx_donate_eth_1.wait()

  // const ethers_to_donate_2 = parseEther("8");
  // const tx_donate_eth_2 = await fundraising_4.connect(user).donateETH({ value: ethers_to_donate_2 });
  // await tx_donate_eth_2.wait()


  
  console.log("🎉 Тестові дії успішно виконані!");
}

main().catch((error) => {
  console.error("❌ Помилка під час деплою тестових даних:", error);
  process.exitCode = 1;
});
