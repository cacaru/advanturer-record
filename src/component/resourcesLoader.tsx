import rawResources from '../data/resources.json';
import { useResourceStore } from "../store/resource.store";

interface Resource {
    id: string;
    value: number;
}

export async function loadLocalResource() {
    const resourceTypeConvert: Resource[] = rawResources.resources.map(r => ({ ...r, value: Number(r.value)}));
    useResourceStore.getState().setResource(resourceTypeConvert);
}