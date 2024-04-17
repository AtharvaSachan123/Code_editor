import React from 'react';
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { LANGUAGES_VERSIONS } from '../constants';

const languages = Object.entries(LANGUAGES_VERSIONS);

const LanguageSelector = ({language,onSelect}) => {
    return (
        <Box>
            <Text mb={2} fontSize="lg"> Language: </Text>
            <Menu>
                <MenuButton as={Button}>
                    {language}
                </MenuButton>
                <MenuList>
                    {
                        languages.map(([language, version]) => (
                            <MenuItem key={language}
                            onClick={()=>onSelect(language)}>
                                {language}
                                &nbsp;
                                <Text as="span" color="gray.500" fontSize="sm">
                                    {version}
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
