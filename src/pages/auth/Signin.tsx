import { Suspense } from "react";
import { useFetchRewardCards } from "../../hooks/useGetData";


const DataComponent = () => {
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