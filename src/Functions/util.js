export const formatKey = (str) => {
    const formattedString = str.split('_').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    return formattedString;
};

export const EachField = ({ entry, onChange, editableFields, blackListedFields, isEditable }) => {
    const [key='', value=''] = entry;
    const fieldName = formatKey(key);
    let formattedValue = value;
    if (key.trim() === 'initial_investment') {
        formattedValue = `₹ ${value}`;
    } else if (key === 'created_at') {
        formattedValue = getDateFromEpoch(value).toDateString();
    };
    
    return (!blackListedFields.includes(key) && key) ? (
        <div className='user-profile-field flex align-center gap-5xl'>
            <b>{fieldName}</b>
            <div>
                {editableFields.includes(key)
                    ? (
                        isEditable ? (
                            <input
                            id={key} 
                            name={key} 
                            {...{ value }} 
                            className='editable-input' 
                            onChange={(e) => onChange({ key, value: e.target.value })} />
                        ) : (<div className='noneditable-field'>{formattedValue}</div>)
                    )
                    : (<div className='noneditable-field'>{formattedValue}</div> || 'N/A')}
            </div>
        </div>
    ) : null;
};

export const getDateFromEpoch = (epoch) => {
    const date = new Date(epoch * 1000);
    return date;
};

export const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'UTC'
    };
    return date.toLocaleString('en-US', options);
  }

export function getCredentials() {
    try {
        return JSON.parse(localStorage.getItem('auth_credentials')) || {};
    } catch (error) {
        return {};
    }
}

export function setCredentials(credentials) {
    localStorage.setItem('auth_credentials', JSON.stringify(credentials));
}

export function clearCredentials() {
    localStorage.removeItem('auth_credentials');
}

export function getUserId() {
    const { userID } = getCredentials();
    return userID || null;
}