import React, { useState, useEffect, Fragment } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Hero } from '../../model';

export const ClassicSuperHeroes = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<Hero[]>([]);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const data  = axios.get('http://localhost:4000/superheroes').then((res) => {
            setData(res.data);
            setIsLoading(false);
        }).catch((error) => {
            console.log('ClassicSuperHeroes::Failed to fetch superheroes', error);
            setError('ClassicSuperHeroes::Failed to fetch superheroes');
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (error && error.length > 0) {
        return <Text>{error}</Text>;
    }

    return (
        <React.Fragment>
            <Text>Class Superheroes page</Text>
            {
                data.map((hero: Hero) => (
                    <View key={`${hero.name}_${hero.id}`}>
                        <Text>{hero.name}</Text>
                    </View>
                )) 
            }  
        </React.Fragment>
    );
}