const Practice = {
    basic: [
        {
            id: 0,
            message: "",
        }
    ],
    intermediate: [
        {
            id: 20,
            message: "",
        }
    ],
    advance: [
        {
            id: 40,
            message: "",
        }
    ],
    master: [
        {
            id: 60,
            message: "",
        }
    ],
    all: () => {
        return [].concat(Practice.basic, Practice.intermediate, Practice.advance, Practice.master);
    },
};

export default Practice;