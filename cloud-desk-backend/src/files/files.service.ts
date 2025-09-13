// files.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class FilesService {
  private readonly uploadPath = join(__dirname, '..', 'uploads');

  async ensureUploadPath() {
    await fs.mkdir(this.uploadPath, { recursive: true });
  }

  async getFile(filename: string) {
    const filePath = join(this.uploadPath, filename);
    try {
      await fs.access(filePath);
      return filePath;
    } catch {
      throw new NotFoundException('File not found');
    }
  }

  async listFilesAndFolders() {
    await this.ensureUploadPath();
    const items = await fs.readdir(this.uploadPath, { withFileTypes: true });
    return items.map((item) => ({
      name: item.name,
      type: item.isDirectory() ? 'folder' : 'file',
    }));
  }
}
