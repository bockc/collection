import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import images from '../../assets';

const HamburgerMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => props.onMenuOpen(menuOpen), [menuOpen]);

  return (
    <>
      <TouchableOpacity style={{ marginRight: 4 }} onPress={() => setMenuOpen(!menuOpen)}>
        <Image source={images.icons.hamburger} tintColor="black" />
      </TouchableOpacity>
    </>
  );
};

HamburgerMenu.propTypes = {
  onMenuOpen: PropTypes.func.isRequired,
};

export default HamburgerMenu;
