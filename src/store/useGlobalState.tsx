import { useState } from 'react';

import IQuestionnaire from '../interfaces/IQuestionnaire';

// interface IQuestionnaire {
//     asylumProgress: string, 
//     visa: string, 
//     fingerprints: string, 
//     passport: string, 
//     nationality: string, 
//     under18: string, 
//     familyInGermany: string,
//     familyElsewhere: string,
//     adviceLocation: string
// }



const useGlobalState = () => {
    const [state, setState] = useState<IQuestionnaire>({
            // Questionnaire
            asylumProgress: 'Change Me!!!',
            visa: 'no',
            fingerprints: 'no',
            passport: 'no',
            nationality: '',
            under18: 'no',
            familyInGermany: 'no',
            familyElsewhere: 'no',
            adviceLocation: ''
        }
    );

    const actions = (action: { type: any; payload: any; }) => {
        console.log('In actions', state.asylumProgress)
        const { type, payload } = action;
        switch (type) {
            case'setState':
                return setState(payload);
            default:
                return state;
        }
        
    }

    return {state, actions}
}

export default useGlobalState;