import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'cv.pdf');
        const fileBuffer = await readFile(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="PhamVanSy_NeuroDev_CV.pdf"',
            },
        });
    } catch {
        return new NextResponse('File not found', { status: 404 });
    }
}
