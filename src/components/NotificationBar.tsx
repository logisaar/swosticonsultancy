import React, { useState, useEffect } from 'react';
import { Download, FileText, AlertCircle } from 'lucide-react';

interface NotificationItem {
  id: string;
  title: string;
  type: 'download' | 'navigate' | 'alert';
  url?: string;
  isNew?: boolean;
}

// Demo data - easily replaceable with API endpoints
const notificationData: NotificationItem[] = [
  {
    id: '1',
    title: 'ITR Filing Deadline Extended - Download Latest Guidelines PDF',
    type: 'download',
    url: '/pdfs/itr-guidelines.pdf',
    isNew: true
  },
  {
    id: '2', 
    title: 'New GST Compliance Updates for December 2024',
    type: 'navigate',
    url: '/blog/gst-updates-december-2024'
  },
  {
    id: '3',
    title: 'Company Registration Process Simplified - Free Consultation Available',
    type: 'alert',
    url: '/services/business-registration'
  },
  {
    id: '4',
    title: 'Download 2024-25 Tax Planning Guide for Businesses',
    type: 'download', 
    url: '/pdfs/tax-planning-guide.pdf',
    isNew: true
  },
  {
    id: '5',
    title: 'ROC Filing Deadline Approaching - Book Your Slot Now',
    type: 'navigate',
    url: '/contact'
  }
];

const NotificationBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % notificationData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleNotificationClick = (item: NotificationItem) => {
    if (item.type === 'download' && item.url) {
      // In a real app, this would trigger a download
      window.open(item.url, '_blank');
    } else if (item.url) {
      // Navigate to the specified URL
      window.location.href = item.url;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'download':
        return <Download className="w-4 h-4 mr-2 flex-shrink-0" />;
      case 'navigate':
        return <FileText className="w-4 h-4 mr-2 flex-shrink-0" />;
      default:
        return <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />;
    }
  };

  return (
    <div className="bg-gradient-primary text-primary-foreground py-2 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => handleNotificationClick(notificationData[currentIndex])}
        >
          {getIcon(notificationData[currentIndex].type)}
          <span className="text-sm font-medium text-center">
            {notificationData[currentIndex].title}
            {notificationData[currentIndex].isNew && (
              <span className="ml-2 bg-ca-gold text-foreground px-2 py-1 rounded-full text-xs font-bold">
                NEW
              </span>
            )}
          </span>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center mt-2 space-x-1">
          {notificationData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-foreground' : 'bg-primary-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;