import { ValidationChain, body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const anyErrors = validationResult(req);
    if (anyErrors.isEmpty()) {
      return next();
    }
    const extractedErrors = anyErrors.array();
    return res.status(422).json({ errors: extractedErrors });
  };
};

export const loginValidator = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email is invalid'),

  body('password')
    .trim()
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
];

export const signupValidator = [
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isString()
    .isLength({ min: 3 })
    .withMessage('name must be at least 3 characters long'),

  ...loginValidator,
];
