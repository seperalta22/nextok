import type { NextApiRequest, NextApiResponse } from 'next';
import { allPostsQuery } from '../../../utils/queries';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const query = allPostsQuery();
    }
}
