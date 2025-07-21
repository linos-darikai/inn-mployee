// Block interface
export interface Block {
    bid: string; // internal
    type: 'img' | 'video' | 'pdf' | 'form' | 'text' | 'doc';
    fid?: string; // firebase resource id
    link?: string; // for rendering videos
    title: string;
    description: string;
}   

export const testBlocks: Block[] = [
  {
    bid: 'BLK001',
    type: 'video',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Welcome to InnBucks',
    description: 'Introductory video about InnBucks values, culture, and mission.'
  },
  {
    bid: 'BLK002',
    type: 'pdf',
    fid: 'pdf-welcome-pack',
    title: 'Employee Welcome Pack',
    description: 'Downloadable guide covering policies, benefits, and onboarding steps.'
  },
  {
    bid: 'BLK003',
    type: 'form',
    fid: 'form-bank-details',
    title: 'Banking Details Form',
    description: 'Fill out your banking details for salary processing.'
  },
  {
    bid: 'BLK004',
    type: 'img',
    fid: 'img-org-structure',
    title: 'Organizational Structure',
    description: 'Visual chart showing the hierarchy of departments and roles.'
  },
  {
    bid: 'BLK005',
    type: 'doc',
    fid: 'doc-nda-template',
    title: 'Non-Disclosure Agreement',
    description: 'Read and acknowledge the NDA document before proceeding.'
  },
  {
    bid: 'BLK006',
    type: 'text',
    title: 'Code of Conduct',
    description: 'All employees must adhere to the following rules and guidelines...'
  }
];
