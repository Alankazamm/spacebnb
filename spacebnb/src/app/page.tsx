'use client';
import { useState, useEffect } from "react";
import "../../configAmplify";
import { API } from "aws-amplify";
import { listLodges } from "../graphql/queries";
import { Lodge } from "../API";
import { Property } from "./properties/[lodge]";
export default function Home() {
  const [lodges, setLodges] = useState<Lodge[]>();
  const fetchLodges = async () => {
    try {
      const lodgesData = await API.graphql({
        query: listLodges,
      }) as any;

    console.log(lodgesData);
      setLodges(lodgesData.data.listLodges.items);
    } catch (err) {
      console.log("error fetching lodges", err);
    }
  }
  useEffect(() => {
    fetchLodges();
  }, []);
  console.log(lodges);
	return (
		<main >
			<div>
				<h1> Helllo World</h1>
        {lodges?.map(lodge => {
          return (
            <Property lodge={lodge}/>
          )
        })}
			</div>
		</main>
	);
}
