import { Suspense } from "react";
import { useFetchRewardCards } from "../../hooks/useGetData";

const fetchData = () => {
    let data: any = null;
    let promise = fetch('https://62d7f7f09c8b5185c7800bb3.mockapi.io/pho').then((res) => res.json()).then((res) => {
        data = res;
    });
    return {
        read() {
            if (!data) {
                throw promise;
            }
            return data;
        },
    };
};

const DataComponent = (props: any) => {
    const useget = useFetchRewardCards();
    if(useget.isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>{JSON.stringify(useget.data)}</h1>
        </div>
    );
};

const Signin = () => {
    
    return (
        <Suspense fallback={<p>Loading data...</p>}>
            <DataComponent />
        </Suspense>
    )
};

export default Signin;