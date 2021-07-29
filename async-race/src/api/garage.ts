import { GARAGE_URL, CARS_PER_GARAGE_PAGE } from './constants';

const getCars = async (page = 0, limit = CARS_PER_GARAGE_PAGE) => {
  const response = await fetch(`${GARAGE_URL}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

const getCar = async (id: number) => {
  const response = await fetch(`${GARAGE_URL}/${id}`);

  return response.json();
};

const createCar = async (name: string, color: string) => {
  const params = {
    name,
    color,
  };
  const request = await fetch(GARAGE_URL, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request.json();
};

const updateCar = async (id: number, name: string, color: string) => {
  const params = {
    name,
    color,
  };
  const request = await fetch(`${GARAGE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request.json();
};

const deleteCar = async (id: number) => {
  const request = await fetch(`${GARAGE_URL}/${id}`, {
    method: 'DELETE',
  });

  return request.status;
};

export default {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
};
