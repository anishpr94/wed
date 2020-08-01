import React, { useState, useEffect, useRef, useCallback } from 'react';

import MainLayout from '@components/Layout';
import Ticket from '@components/Ticket';

import useGuestData from '@/hooks/useGuestData';
import { styTicket } from '@components/Ticket/styles';
import getQueryValue from '../helpers/getQueryValue';

function ETicket({ location }) {
  const codeEticket = getQueryValue(location, 'code') || '';
  const alreadyChecked = useRef(false);

  const [value, setValue] = useState('');
  const [selectedGuest, setSelectedGuest] = useState({});
  const [isShowTicket, setIsShowTicket] = useState(false);

  const { data, loading } = useGuestData();

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  const handleCheckTicket = useCallback(
    (tempValue) => {
      const guestCode = (tempValue || value).toUpperCase();
      const guest = data.find((g) => (g.code || '').toUpperCase() === guestCode);

      if (guest) {
        setSelectedGuest(guest);
        setIsShowTicket(true);
        return;
      }

      alert(`Maaf, Kode data ${guestCode} tidak ditemukan. Mohon di cek lagi..`);
    },
    [data, value],
  );

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      handleCheckTicket();
    }
  };

  /**
   * Effect to autu-check code ticket
   */
  useEffect(() => {
    if (codeEticket !== '' && data.length > 0 && !alreadyChecked.current) {
      alreadyChecked.current = true;
      setValue(codeEticket);
      setTimeout(() => {
        handleCheckTicket(codeEticket);
      }, 1000);
    }
  }, [codeEticket, data.length, handleCheckTicket, loading]);

  const renderTypeContent = () => {
    if (isShowTicket) return <Ticket guest={selectedGuest} onRecheckTicket={() => setIsShowTicket(false)} />;

    return (
      <>
        <div style={{ marginTop: '-100px' }}>
          <h2 className="sub-title-ticket">Penukaran e-Ticket Pernikahan</h2>
          <h1 className="title">Dinda & Indra</h1>
        </div>
        <div className="input-ticket">
          <input
            value={value}
            disabled={loading}
            type="text"
            placeholder={`${loading ? 'Tunggu sebentar..' : 'Masukan kode undangan..'}`}
            onChange={handleSetValue}
            onKeyDown={handleKeyDown}
          />
        </div>
      </>
    );
  };

  return (
    <MainLayout>
      <div css={styTicket}>
        <div className="homepage">{renderTypeContent()}</div>
      </div>
    </MainLayout>
  );
}

export default ETicket;
