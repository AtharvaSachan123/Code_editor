import React from 'react';
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { LANGUAGES_VERSIONS } from '../constants';

const languages = Object.entries(LANGUAGES_VERSIONS);

const LanguageSelector = ({language,onSelect}) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg"> Language: </Text>
            <Menu isLazy>
                <MenuButton as={Button}>
                    {language}
                </MenuButton>
                <MenuList bg='#110c1b'>
                    {
                        languages.map(([lang, version]) => (
                            <MenuItem key={lang}
                            color={
                                lang === language ? 'blue.400' : ''
                            }
                            bg={
                                lang === language ? 'grey.900' : ''
                            }
                            _hover={{
                                color:'blue.400',
                                bg:'grey.900'
                            }}




                            onClick={()=>onSelect(lang)}>
                                {lang}
                                &nbsp;
                                <Text as="span" color="gray.500" fontSize="sm">
                                    ({version})
                                </Text>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
