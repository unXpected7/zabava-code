import Card from '@/app/components/Card';
import {
  getFloorPrice,
  getNFts,
  getProfile
} from '@/store/home';
import { RootState } from '@/store/store';
import React, { useEffect, useState } from 'react';
import {
  useAppSelector,
  useAppDispatch
} from '@/utils/hooks';
import ButtonNext from '../components/ButtonNext';

export default function HomeContainer() {
  const dispatch = useAppDispatch();
  const nftsData = useAppSelector((state: RootState) => state.home?.dataNFTs);
  const stats = useAppSelector((state: RootState) => state.home?.stats);
  const profile = useAppSelector((state: RootState) => state.home?.profile);

  const [floorPrice, setFloorPrice] = useState<number>(0);
  const [symbol, setSymbol] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const collectionOne = 'degods';
  const limit = 50;
  const nextParam = nftsData?.next ?? ""
  const params= {collectionOne, limit, nextParam}
  const nextPage = () => {
    dispatch(getNFts(collectionOne, limit, nextParam));
  };

  useEffect(() => {
    dispatch(getNFts(collectionOne, limit, nextParam));
    dispatch(getFloorPrice(collectionOne));
    dispatch(getProfile(collectionOne));
  }, []);

  useEffect(() => {
    setFloorPrice(stats?.total?.floor_price || 0);
    setSymbol(stats?.total?.floor_price_symbol || "");
    setLink(profile?.project_url || "");
    
  }, [nftsData, profile, stats]);

  return (
    <div>
      <div className="bg-blackGrid grid min-[400px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 p-10">
        {nftsData?.nfts?.map((nft: any) => (
          <Card
            key={nft.identifier}
            identifier={nft.identifier}
            img={nft.image_url}
            name={nft.name}
            price={floorPrice}
            symbol={symbol}
            link={link}
          />
        ))}
      </div>
      <div className="flex flex-1 justify-end">
        <ButtonNext nextPage={nextPage}/>
      </div>
    </div>
  );
}
