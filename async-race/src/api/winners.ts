import { WINNERS_URL, CARS_PER_WINNERS_PAGE } from './constants';

const getWinners = async (page = 1, sort?: string, order?: string) => {
  let url = `${WINNERS_URL}?_page=${page}&_limit=${CARS_PER_WINNERS_PAGE}`;
  if (sort && order) {
    url += `&_sort=${sort}&_order=${order}`;
  } else if (sort) {
    url += `&_sort=${sort}&_order=DESC`;
  }
  const response = await fetch(url);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};
const getWinner = async (id: number) => ((fetch(`${WINNERS_URL}/${id}`)));

const createWinner = async (id: number, wins: number, time: number) => {
  const params = {
    id,
    wins,
    time,
  };
  const request = await fetch(WINNERS_URL, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request.json();
};

const deleteWinner = async (id: number) => {
  const request = await fetch(`${WINNERS_URL}/${id}`, {
    method: 'DELETE',
  });

  return request.json();
};

const updateWinner = async (id: number, wins: number, time: number) => {
  const params = {
    wins,
    time,
  };
  const request = await fetch(`${WINNERS_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return request.json();
};

export default {
  getWinners, getWinner, createWinner, updateWinner, deleteWinner,
};
