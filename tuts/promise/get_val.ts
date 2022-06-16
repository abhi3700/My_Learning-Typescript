/* 
    Get the value with type maintained from async function (of type Promise<type>) e.g. Promise<Contract>
*/

// Here, `deployDiamond()` is defined as async with Promise<Contract> returning a value of type `Contract`
export async function deployDiamond(
  ethers: HardhatEthersHelpers
  // define params as string, number (used in constructor)
) {
  // ==== 1. deploy facets
  console.log("Deploying facets:");
  const FacetNames = [
    "DiamondLoupeFacet",
    "OwnershipFacet",
    "PausableFacet",
    "ActivePool",
    "DefaultPool",
    "Whitelist",
    // "BorrowerOperations",
  ];
  const cut = [];
  ...
  ...

  return diamond.address;
}

// get the value with type returned by `async` function
const diamond: Contract = await deployDiamond(ethers).then((result) => result);
