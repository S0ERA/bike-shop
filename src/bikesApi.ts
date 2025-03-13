import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface Bike {
    id: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    oldPrice?: number;
    rating?: number;
    reviews?: number;
    inStock: boolean;
    isNew?: boolean;
    discount?: number;
    specifications: {
        frameSize: string[];
        frameMaterial: string;
        suspension: string;
        wheelSize: number;
        speeds: number;
        weight: number;
        brakeType: string;
    };
    features: string[];
    colors: {
        name: string;
        hex: string;
        inStock: boolean;
    }[];
    images: string[];
    description: string;
    category: string[];
}

export const bikesApi = createApi({
    reducerPath: 'bikesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (builder) => ({
        getAllBikes: builder.query<Bike[], void>({
            query: () => 'bikes?_limit=9',
        }),
    })
});

export const {useGetAllBikesQuery} = bikesApi;