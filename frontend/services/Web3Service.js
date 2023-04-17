import Web3 from "web3";

export async function doLogin() {
  if (!window.ethereum) throw new Error("No metamask found");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length)
    throw new Error("Wallet not found/allowed");
  return accounts[0]
}
