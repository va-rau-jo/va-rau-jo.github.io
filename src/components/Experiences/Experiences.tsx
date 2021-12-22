import React, { useEffect, useState } from 'react';
import './styles.scss';

const Experiences = () => {
    const [data, setData] = useState([
        {
            name: '',
        }
    ]);

    const [dataLoaded, setDataLoaded] = useState(false);

    const loadData = async () => {
        // await fs.readFile('../data/experiences.txt', 'utf8', (error, data) => {
        //     console.log(data);
        // });

        const experience = {
            name: 'test'
        };

        setData(data.concat(experience));        
    }

    useEffect(() => {
        (async () => {
            console.log("use effect");
            setDataLoaded(false);
            await loadData();
            console.log("data loaded");
            setDataLoaded(true);
        })();
    }, []);

    return (
        !dataLoaded ? 
            <></> :
            <ul className='experiences_list'>
                {data.map((entry, i) => {
                    return (
                        <div key={i}>
                            {entry.name}
                        </div>
                    );
                })}
            </ul>
    );
}

export default Experiences;