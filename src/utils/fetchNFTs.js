const endpoint = `https://polygon-mainnet.g.alchemy.com/v2/r0H4W26_5OaycphwfcSbqMaRHDqqlFwA`;

export const fetchNFTs = async (contractAddress, id, setNFTs, retryAttempt) => {
  const owner = "0x00e0Aba85E8Ae98331ecd5Ea3E6B514986e01Ef1";
  if (retryAttempt === 5) {
    return;
  }
  if (owner) {
    let data;
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json());
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then((data) =>
          data.json()
        );
      }
    } catch (e) {
      fetchNFTs(endpoint, owner, contractAddress, setNFTs, retryAttempt + 1);
    }
    setNFTs(
      data.ownedNfts.filter(
        (it) => parseInt(id) === parseInt(it.id.tokenId, 16)
      )
    );
    return data;
  }
};
