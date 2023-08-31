'use service';

import axios from 'axios';
import { basicParams } from '@/constants/api';
import { arrayIsEmpty } from '@/utils/arrays';
import { createCustomError } from '@/utils/errors';
import { toQueryParams } from '@/utils/urls';
import { type NextRequest, NextResponse } from 'next/server';

const URL_BASE = process.env.API_URL;

export async function GET (req: NextRequest) {
  const search = req.nextUrl.searchParams.get('q');
  const reqParams = { ...basicParams, q: search };

  try {
    const { data } = await axios.get(`${URL_BASE}${toQueryParams(reqParams)}`);

    if (arrayIsEmpty(data.hits)) throw createCustomError('Not Found', 404);

    return NextResponse.json(data.hits);
  } catch (error) {
    console.log('---ERROR----', error);
    return error;
  }
}
