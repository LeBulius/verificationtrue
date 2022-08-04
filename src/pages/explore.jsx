import { useState } from "react";
import NftCard from "../components/nftcard";
import { fetchNFTs } from "../utils/fetchNFTs";

const Explore = () => {
  const [id, setId] = useState();
  const [contractAddress, setContractAddress] = useState("");
  const [NFTs, setNFTs] = useState("");

  return (
    <div>
      <header className=" py-24  mb-12 w-full alchemy">
        <div className="flex flex-col items-center mb-12">
          <div className="mb-16 text-white text-center">
            <h1 className="text-5xl sm:text-7xl tracking-tight font-extrabold mb-2 opacity-80">
              TRUEDIPLOMA
            </h1>
            <h2 className="text-xl sm:text-2xl mb-2 uppercase font-bold tracking-wider">
              One-Click Verification
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 w-2/6  min-w-[330px] gap-y-2 ">
            <input
              className="focus:outline-none rounded-sm py-2 px-3 w-full"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              placeholder="Insert NFT Contract address"
            ></input>
            <input
              className="border rounded-sm focus:outline-none py-2 px-3 w-full"
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="number"
              placeholder="Insert NFT Id"
            ></input>
          </div>
          <div className="w-2/6 flex justify-center min-w-[330px]">
            {contractAddress.length > 0 && id ? (
              <button
                className="py-3 bg-white rounded-sm w-full hover:bg-slate-100"
                onClick={() => {
                  fetchNFTs(contractAddress, id, setNFTs);
                }}
              >
                Verify!
              </button>
            ) : (
              <>
                <div className="rounded-md bg-blue-50 p-4 w-full">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {/* <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 flex-1 md:flex md:justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-blue-800">
                          In order to proceed for the verification of the
                          diploma
                        </h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <ul className="list-decimal pl-5 space-y-1">
                            <li>
                              Enter the unique verification codes you have
                              received.
                            </li>
                            <li>Click on the "Verify!" button.</li>
                            <li>
                              You will instantly see if the certificate is
                              authentic.
                            </li>
                          </ul>
                        </div>
                        <p className="mt-3 text-sm">
                          <a
                            href="#"
                            className="whitespace-nowrap font-medium text-blue-800 hover:text-blue-600"
                          >
                            Learn More About Truediploma
                            <span aria-hidden="true">&rarr;</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="flex flex-wrap justify-center">
        {NFTs && NFTs.length > 0 ? (
          NFTs.map((NFT) => {
            return (
              <NftCard
                image={NFT.media[0].gateway}
                id={NFT.id.tokenId}
                title={NFT.title}
                address={NFT.contract.address}
                description={NFT.description}
                attributes={NFT.metadata.attributes}
              ></NftCard>
            );
          })
        ) : (
          <div>No Diploma found</div>
        )}
      </section>
    </div>
  );
};

export default Explore
