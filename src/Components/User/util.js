export const blackListedFields = [
    'userId',
    'balance', 
    'pan_number', 
    'aadhar_number', 
    'is_kyc_verified',
    'referral_code_used', 
    'initial_investment', 
    'user_own_referral_code', 
];

export const editableFields = ['first_name', 'last_name'];

export const kycBlackListedFields = [
    'slab',
    'phone',
    'email',
    'userId',
    'balance', 
    'last_name',
    'created_at',
    'first_name',
    'is_kyc_verified',
    'referral_code_used', 
    'initial_investment', 
    'user_own_referral_code',
];

export const kycEditableFields = [ 'pan_number', 'aadhar_number' ];

export const calcAdditionalCharges = (val) => {
    return val === 4900 
        ? 24.50
        : val === 15900
            ? 79.50
            : val === 30000
                ? 135
                : val === 55000
                    ? 247
                    : val === 115000
                        ? 479
                        : null
};