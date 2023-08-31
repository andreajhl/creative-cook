'use service';

import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';
import { basicParams } from '@/constants/api';
import { createCustomError } from '@/utils/errors';
import { objectIsEmpty } from '@/utils/objects';
import { toQueryParams } from '@/utils/urls';
import { ParamsProps } from '@/interfaces/pages';

const URL_BASE = process.env.API_URL;

export async function GET (_: NextRequest, { params }: ParamsProps) {
  const { id } = params;

  try {
    const { data } = await axios.get(`${URL_BASE}/${id}${toQueryParams(basicParams)}`);

    if (objectIsEmpty(data.recipe)) throw createCustomError('Not Found', 404);

    return NextResponse.json(data.recipe);
  } catch (error) {
    console.log('---ERROR----', error);
    throw error;
  }
}
