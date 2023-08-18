export const getScript = ({scripts}) => {
    const {items, step} = scripts;
    return items[step]
};

export const getScriptStep = ({scripts}) => scripts.step;