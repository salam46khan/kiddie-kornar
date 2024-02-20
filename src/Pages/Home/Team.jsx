
import { useEffect, useState } from 'react';
import TeamCard from '../../Components/TeamCard';
const Team = () => {
    const [team, setTeam] = useState([])
    useEffect(()=>{
        fetch('fake-team.json')
        .then(res => res.json())
        .then(data=> setTeam(data))
    },[])
    return (
        <div className="py-16 px-2">
            <div className="container mx-auto">
                <div className="max-w-lg pb-5 text-center mx-auto">
                    <h2 className="text-4xl font-bold">Our Team</h2>
                    <p className="text-Second">Discover a world of wonder and imagination with our delightful collection of toys.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    {
                        team.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;