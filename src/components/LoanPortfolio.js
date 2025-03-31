import React, { useState } from "react";
import resollectLogo from "./resollect.png";

const LoanPortfolio = ({ onUpload }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar toggle for mobile

  const tabs = [
    "All",
    "Pre Surface",
    "NPA",
    "13(3) Responses",
    "Symbolic Possession",
    "DM Order",
    "Physical Possessions",
    "Auctions",
  ];

  const loanData = [
    // Your loanData remains unchanged...
    {
      id: "L28U3247",
      loanType: "Home Loan",
      borrower: "Viadika Sachar",
      borrowerAddress: "83 Yogi Garj, Kadapa-558720",
      coBorrower1Name: "Divit Vora",
      coBorrower1Address: "24/543, Acharya Path Drigvar-052360",
      currentDPD: "91",
      sanctionAmount: "₹ 1834068",
      region: "West",
      status: "U",
    },
    // ... other loan data entries ...
  ];

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setShowModal(false);
      setSelectedFile(null);
    }
  };

  const styles = {
    portfolioContainer: {
      display: "flex",
      height: "100vh",
      width: "100%",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      position: "relative",
      flexDirection: window.innerWidth <= 768 ? "column" : "row", 
    },
    sidebar: {
      width: window.innerWidth <= 768 ? (showSidebar ? "100%" : "0") : "220px", 
      backgroundColor: "white",
      borderRight: window.innerWidth <= 768 ? "none" : "2px solid #e0e0e0", 
      borderBottom: window.innerWidth <= 768 ? "1px solid #e0e0e0" : "none", 
      display: "flex",
      flexDirection: "column",
      padding: window.innerWidth <= 768 ? (showSidebar ? "20px 0" : "0") : "30px 0", 
      height: window.innerWidth <= 768 ? "auto" : "100%", 
      position: window.innerWidth <= 768 ? "absolute" : "relative", 
      top: 0,
      left: 0,
      zIndex: 1002,
      overflow: "hidden",
      transition: "width 0.3s ease", // Smooth toggle
    },
    logo: {
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      marginBottom: "20px",
    },
    logoImg: {
      maxWidth: "100%",
      height: "auto",
      objectFit: "contain",
    },
    menuItems: {
      flexGrow: 1,
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
      cursor: "pointer",
      color: "#555",
    },
    menuItemActive: {
      backgroundColor: "#f0f8ff",
      color: "#3366ff",
      borderLeft: window.innerWidth <= 768 ? "none" : "3px solid #3366ff", // Border only on desktop
      borderBottom: window.innerWidth <= 768 ? "3px solid #3366ff" : "none", // Border on mobile
    },
    icon: {
      marginRight: "10px",
      width: "20px",
      textAlign: "center",
    },
    sidebarFooter: {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      color: "#888",
      fontSize: "12px",
    },
    sidebarFooterImg: {
      margin: "0 5px",
    },
    mainContent: {
      flexGrow: 1,
      backgroundColor: "white",
      padding: "20px",
      overflowY: "auto",
      width: window.innerWidth <= 768 ? "100%" : "auto", // Full width on mobile
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    headerTitle: {
      fontSize: window.innerWidth <= 768 ? "20px" : "24px", // Smaller on mobile
      fontWeight: "600",
      color: "#333",
    },
    hamburger: {
      display: window.innerWidth <= 768 ? "block" : "none", // Visible only on mobile
      fontSize: "24px",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "10px",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1003,
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
    },
    userAvatar: {
      borderRadius: "50%",
      marginRight: "10px",
    },
    userEmail: {
      color: "#888",
      marginLeft: "5px",
    },
    tabs: {
      display: "flex",
      flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile, row on desktop
      borderBottom: window.innerWidth <= 768 ? "none" : "1px solid #e0e0e0", // Border only on desktop
      marginBottom: "20px",
    },
    tab: {
      padding: "10px 15px",
      cursor: "pointer",
      color: "#555",
      fontSize: "14px",
      borderBottom: window.innerWidth <= 768 ? "1px solid #e0e0e0" : "none", // Divider on mobile
    },
    tabActive: {
      color: "#3366ff",
      borderBottom: "2px solid #3366ff",
    },
    searchAndFilters: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
      flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile, row on desktop
      gap: window.innerWidth <= 768 ? "10px" : "0", // Spacing on mobile
    },
    searchBar: {
      padding: "8px 15px",
      width: window.innerWidth <= 768 ? "100%" : "260px", // Full width on mobile, fixed on desktop
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      boxSizing: "border-box",
    },
    filterOptions: {
      display: "flex",
      flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile, row on desktop
      gap: window.innerWidth <= 768 ? "10px" : "0", // Spacing on mobile
    },
    selectColumns: {
      marginLeft: window.innerWidth <= 768 ? "0" : "10px", // Margin only on desktop
      padding: "8px 15px",
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      width: window.innerWidth <= 768 ? "100%" : "auto", // Full width on mobile
    },
    moreFilters: {
      marginLeft: window.innerWidth <= 768 ? "0" : "10px", // Margin only on desktop
      padding: "8px 15px",
      backgroundColor: "#3366ff",
      color: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      width: window.innerWidth <= 768 ? "100%" : "auto", // Full width on mobile
    },
    filterIcon: {
      marginRight: "5px",
    },
    selectedInfo: {
      marginBottom: "15px",
      color: "#555",
      fontSize: window.innerWidth <= 768 ? "12px" : "14px", // Smaller on mobile
    },
    loansTable: {
      width: "100%",
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: window.innerWidth <= 768 ? "12px" : "inherit", // Smaller on mobile
    },
    th: {
      textAlign: "left",
      padding: window.innerWidth <= 768 ? "8px" : "10px", // Smaller on mobile
      backgroundColor: "#f8f8f8",
      color: "#555",
      fontWeight: "500",
      borderBottom: "1px solid #e0e0e0",
      whiteSpace: "nowrap",
    },
    td: {
      padding: window.innerWidth <= 768 ? "8px" : "10px", // Smaller on mobile
      borderBottom: "1px solid #e0e0e0",
      color: "#333",
      whiteSpace: "nowrap",
    },
    loanId: {
      color: "#3366ff",
      cursor: "pointer",
    },
    pagination: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      color: "#555",
      fontSize: window.innerWidth <= 768 ? "12px" : "14px", // Smaller on mobile
      flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile
      gap: window.innerWidth <= 768 ? "10px" : "0", // Spacing on mobile
    },
    paginationButton: {
      padding: "5px 15px",
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      cursor: "pointer",
      marginLeft: window.innerWidth <= 768 ? "0" : "10px", // Margin only on desktop
      width: window.innerWidth <= 768 ? "100%" : "auto", // Full width on mobile
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: showModal ? "block" : "none",
      zIndex: 1000,
    },
    modal: {
      position: "fixed",
      top: 0,
      right: 0,
      width: window.innerWidth <= 768 ? "100%" : "350px", // Full width on mobile
      height: "100%",
      backgroundColor: "white",
      boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      zIndex: 1001,
      display: showModal ? "block" : "none",
      overflow: "auto",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      borderBottom: "1px solid #e0e0e0",
      paddingBottom: "15px",
    },
    modalTitle: {
      fontSize: window.innerWidth <= 768 ? "16px" : "18px", // Smaller on mobile
      fontWeight: "600",
    },
    closeButton: {
      background: "none",
      border: "none",
      fontSize: "20px",
      cursor: "pointer",
    },
    filterSection: {
      marginBottom: "20px",
    },
    filterLabel: {
      display: "block",
      margin: "10px 0",
      fontWeight: "500",
    },
    filterInput: {
      width: "100%",
      padding: "10px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      marginBottom: "15px",
      boxSizing: "border-box",
    },
    uploadSection: {
      marginTop: "30px",
      borderTop: "1px solid #e0e0e0",
      paddingTop: "20px",
    },
    uploadTitle: {
      fontSize: window.innerWidth <= 768 ? "14px" : "16px", // Smaller on mobile
      fontWeight: "600",
      marginBottom: "15px",
    },
    fileInput: {
      marginBottom: "20px",
      width: "100%",
    },
    uploadButton: {
      backgroundColor: "#3366ff",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      width: window.innerWidth <= 768 ? "100%" : "40%", // Full width on mobile
      marginTop: "10px",
    },
    selectedFileName: {
      fontSize: window.innerWidth <= 768 ? "12px" : "14px", // Smaller on mobile
      color: "#555",
      marginTop: "10px",
      wordBreak: "break-all",
    },
    filterButton: {
      backgroundColor: "#3366ff",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
      marginTop: "30px",
    },
    resetButton: {
      backgroundColor: "white",
      color: "#3366ff",
      border: "1px solid #3366ff",
      padding: "10px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.portfolioContainer}>
      <button
        style={styles.hamburger}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? "✖" : "☰"}
      </button>
      <div style={styles.sidebar}>
        <div style={styles.logo}>
          <img
            src={resollectLogo}
            alt="Resollect Logo"
            style={styles.logoImg}
          />
        </div>
        <div style={styles.menuItems}>
          <div style={styles.menuItem}>
            <span style={styles.icon}>◻️</span>
            <span>Dashboard</span>
          </div>
          <div style={{ ...styles.menuItem, ...styles.menuItemActive }}>
            <span style={styles.icon}>📊</span>
            <span>Portfolio</span>
          </div>
          <div style={styles.menuItem}>
            <span style={styles.icon}>🔔</span>
            <span>Notifications</span>
          </div>
          <div style={styles.menuItem}>
            <span style={styles.icon}>📄</span>
            <span>Notices</span>
          </div>
          <div style={styles.menuItem}>
            <span style={styles.icon}>🔨</span>
            <span>Auction</span>
          </div>
          <div style={styles.menuItem}>
            <span style={styles.icon}>📤</span>
            <span>Data Upload</span>
          </div>
          <div style={styles.menuItem}>
            <span style={styles.icon}>⚙️</span>
            <span>Control Panel</span>
          </div>
          <div style={styles.menuItem}>
            <span style={styles.icon}>👤</span>
            <span>User Management</span>
          </div>
          <div style={styles.menuItem}>
            <span style={styles.icon}>🔒</span>
            <span>Permissions</span>
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Portfolio</h1>
        </div>

        <div style={styles.tabs}>
          {tabs.map((tab) => (
            <div
              key={tab}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.tabActive : {}),
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div style={styles.searchAndFilters}>
          <input
            type="text"
            placeholder="Search Loan Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchBar}
          />
          <div style={styles.filterOptions}>
            <button style={styles.selectColumns}>
              Select Columns <span>  ▼</span>
            </button>
            <button
              style={styles.moreFilters}
              onClick={() => setShowModal(true)}
            >
              <span style={styles.filterIcon}>🔍</span> More Filters
            </button>
          </div>
        </div>

        <div style={styles.selectedInfo}>
          <span>0 loans selected</span>
        </div>

        <div style={styles.loansTable}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>
                  <input type="checkbox" />
                </th>
                <th style={styles.th}>
                  Loan No <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Loan Type <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Borrower <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Borrower Address <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Co Borrower 1 Name <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Co Borrower 1 Address <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Current DPD <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Sanction Amount <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Region <span>↕️</span>
                </th>
                <th style={styles.th}>
                  Status <span>↕️</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan) => (
                <tr key={loan.id}>
                  <td style={styles.td}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ ...styles.td, ...styles.loanId }}>{loan.id}</td>
                  <td style={styles.td}>{loan.loanType}</td>
                  <td style={styles.td}>{loan.borrower}</td>
                  <td style={styles.td}>{loan.borrowerAddress}</td>
                  <td style={styles.td}>{loan.coBorrower1Name}</td>
                  <td style={styles.td}>{loan.coBorrower1Address}</td>
                  <td style={styles.td}>{loan.currentDPD}</td>
                  <td style={styles.td}>{loan.sanctionAmount}</td>
                  <td style={styles.td}>{loan.region}</td>
                  <td style={styles.td}>{loan.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.pagination}>
          <span>Total: 100 row(s)</span>
          <div>
            <button style={styles.paginationButton}>Previous</button>
            <button style={styles.paginationButton}>Next</button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div
        style={styles.modalOverlay}
        onClick={() => setShowModal(false)}
      ></div>

      {/* Filter and Upload Modal */}
      <div style={styles.modal}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>Upload Document</h3>
          <button
            style={styles.closeButton}
            onClick={() => setShowModal(false)}
          >
            ×
          </button>
        </div>

        <div style={styles.filterSection}>
          <label style={styles.filterLabel}>Document Name</label>
          <select style={styles.filterInput}>
            <option value="">Select</option>
            <option value="home">Home Loan</option>
            <option value="car">Car Loan</option>
            <option value="personal">Personal Loan</option>
          </select>

          <label style={styles.filterLabel}>Document Type</label>
          <select style={styles.filterInput}>
            <option value="">Select</option>
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>

          <label style={styles.filterLabel}>Document Remarks</label>
          <input type="text" placeholder="Type" style={styles.filterInput} />
        </div>

        <div style={styles.uploadSection}>
          <h4 style={styles.uploadTitle}>Select File</h4>

          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            style={styles.fileInput}
          />

          {selectedFile && (
            <div style={styles.selectedFileName}>
              Selected: {selectedFile.name}
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "#3366ff",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "4px",
                cursor: "pointer",
                width: "40%",
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanPortfolio;