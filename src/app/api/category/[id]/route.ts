'use service';

import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';
import { basicParams } from '@/constants/api';
import { ParamsProps } from '@/interfaces/pages';
import { arrayIsEmpty } from '@/utils/arrays';
import { createCustomError } from '@/utils/errors';
import { toQueryParams } from '@/utils/urls';

const URL_BASE = process.env.API_URL;

export async function GET (_: NextRequest, { params }: ParamsProps) {
  const { id } = params;
  const reqParams = { ...basicParams, mealType: id };

  try {
    const { data } = await axios.get(`${URL_BASE}${toQueryParams(reqParams)}`);

    if (arrayIsEmpty(data.hits)) throw createCustomError('Not Found', 404);

    return NextResponse.json(data.hits);
  } catch (error) {
    console.log('---ERROR----', error);
    throw error;
  }
}
