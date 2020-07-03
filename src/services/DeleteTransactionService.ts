import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transation = await transactionRepository.findOne(id);

    if (!transation) {
      throw new AppError('Transaction does not exist');
    }

    await transactionRepository.remove(transation);
  }
}

export default DeleteTransactionService;
