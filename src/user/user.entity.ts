import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index('UNIQUE_IDX', ['socialSecurityNumber', 'specialCode'], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'social_security_number' })
  socialSecurityNumber: string;

  @Column({ name: 'special_code' })
  specialCode: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  constructor(partial: Partial<User>) {
    this.socialSecurityNumber = '';
    this.specialCode = '';
    Object.assign(this, partial);
  }
}
