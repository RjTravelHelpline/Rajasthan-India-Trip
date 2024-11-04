import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    const handleClick = () => {
        // Replace with your WhatsApp number or link
        window.open('https://api.whatsapp.com/send?phone=919414047940', '_blank');
    };

    return (
        <div className="whatsapp-icon" onClick={handleClick}>
            <FaWhatsapp />
        </div>
    );
};

export default WhatsAppIcon;
