import produce from 'immer';

export default function pedido(state = [], action){
  switch(action.type){
        case 'ADD_PRATO':
            return produce(state, draft => {
                const pratoIndex = draft.findIndex(pratos => pratos.id === action.pratos.id);

                if(pratoIndex >= 0){
                    draft[pratoIndex].amount += 1;
                } else{
                    draft.push({
                        ...action.pratos,
                        amount: 1,
                    })
                }
            });
        case 'REMOVE_PRATO':
            return produce(state, draft => {
                const pratoIndex = draft.findIndex(pratos => pratos.id === action.id);

                if(pratoIndex >= 0){
                    draft.splice(pratoIndex, 1);
                }
            });
        case 'UPDATE_AMOUNT_PEDIDO': {
            if(action.amount <= 0){
                return state;
            }

            return produce(state, draft => {
                const quantIndex = draft.findIndex(item => item.id === action.id);

                if(quantIndex >= 0){
                    draft[quantIndex].amount = Number(action.amount);
                }
            });
        }
        default:
           return state
  }
}