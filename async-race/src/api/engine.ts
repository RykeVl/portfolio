import { ENGINE_URL } from './constants';

const startEngine = async (id: number) => (await fetch(`${ENGINE_URL}?id=${id}&status=started`)).json();

const stopEngine = async (id: number) => (await fetch(`${ENGINE_URL}?id=${id}&status=stopped`)).json();

const drive = async (id: number) => (await fetch(`${ENGINE_URL}?id=${id}&status=drive`)).json();

export default {
  startEngine, stopEngine, drive,
};
