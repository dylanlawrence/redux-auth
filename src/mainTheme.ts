import {extendTheme} from "@chakra-ui/react";

const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px)',
}
export const theme = extendTheme({
    colors: {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
        },
    },
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        input:{
                            border:'none',
                            borderRadius: 0,
                            borderBottom:'2px solid',
                            borderColor: '#CCC',
                            backgroundColor: '#FFF',
                            boxShadow:'none',
                        },
                        textarea: {
                            border:'none',
                            borderRadius: 0,
                            borderBottom:'2px solid',
                            borderColor: '#CCC',
                            backgroundColor: '#FFF',
                            boxShadow:'none',
                        },
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles,
                            },
                            input:{
                                border:'none',
                                borderRadius: 0,
                                borderBottom:'2px solid',
                                boxShadow:'none',
                            },
                            textarea: {
                                border:'none',
                                borderRadius: 0,
                                borderBottom:'2px solid',
                                boxShadow:'none',
                            }
                        },
                        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                            {
                                ...activeLabelStyles,
                            },
                        'textarea:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                            {
                                ...activeLabelStyles,
                            },
                        label: {
                            top: 0,
                            left: 5,
                            zIndex: 2,
                            position: 'absolute',
                            backgroundColor: 'transparent',
                            pointerEvents: 'none',
                            mx: 3,
                            px: 1,
                            my: 2,
                            transformOrigin: 'left top'
                        },
                    },
                },
            },
        },
    },
})
