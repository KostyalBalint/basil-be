
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface PlantInput {
    name: string;
    waterFrequency: number;
}

export interface IQuery {
    plants(): Nullable<Nullable<Plant>[]> | Promise<Nullable<Nullable<Plant>[]>>;
    plant(id?: Nullable<string>): Nullable<Plant> | Promise<Nullable<Plant>>;
}

export interface IMutation {
    addPlant(plant?: Nullable<PlantInput>): Nullable<Plant> | Promise<Nullable<Plant>>;
    waterPlant(id?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
    removePlant(id?: Nullable<string>): Nullable<Plant> | Promise<Nullable<Plant>>;
}

export interface Plant {
    id: string;
    name: string;
    lastWatered?: Nullable<DateTime>;
    waterFrequency: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
