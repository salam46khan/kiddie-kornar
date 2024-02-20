
import { useState } from "react";
import ChooseItem from "../../Components/ChooseItem";
import { useEffect } from "react";

const Choose = () => {
    const [choose, setChoose] = useState([])
    useEffect(()=>{
        fetch('fake-choose.json')
        .then(res => res.json())
        .then(data => setChoose(data))
    },[])
    return (
        <div className="py-16 px-2">
            <div className="container mx-auto">
                <div className="text-center max-w-lg mx-auto mb-5">
                    <h2 className="text-4xl font-bold">Why Choose Us</h2>
                    <p className="text-Second">Discover a world of wonder and imagination with our delightful collection of toys.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        choose.map(choose => <ChooseItem key={choose.id} choose={choose}></ChooseItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Choose;