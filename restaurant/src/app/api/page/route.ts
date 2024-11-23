import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const data = { name, email, message, timestamp: new Date() };
    const filePath = path.resolve('data', 'submissions.json');
    const dirPath = path.resolve('data');
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let existingData = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        existingData = fileContent ? JSON.parse(fileContent) : [];
      } catch (error) {
        console.error('Error parsing JSON:', error);
        existingData = [];
      }
    } else {
      existingData = [];
    }
    existingData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: 'Your message has been saved!' });
  } catch (error) {
    console.error('Error saving to file:', error);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}