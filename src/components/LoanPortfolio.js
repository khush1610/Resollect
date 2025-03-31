import React, { useState } from "react";
import resollectLogo from "./resollect.png";

const LoanPortfolio = ({ onUpload }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
    {
      id: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hrishika Agrawal",
      borrowerAddress: "86/822, Devi Path, Burhanpore-841186",
      coBorrower1Name: "Mahika Tak",
      coBorrower1Address: "5B Indra Road, Sultan Pur, Majra 910878",
      currentDPD: "100",
      sanctionAmount: "₹ 1842143",
      region: "North",
      status: "M",
    },
    {
      id: "L28U3250",
      loanType: "Car Loan",
      borrower: "Priyansh Soman",
      borrowerAddress: "H.No. 152 Andra Street Amritsar-417192",
      coBorrower1Name: "Zaina Dara",
      coBorrower1Address: "H.No. 42, Srivastava Marg, Junagadh-191124",
      currentDPD: "100",
      sanctionAmount: "₹ 4537889",
      region: "East",
      status: "T",
    },
    {
      id: "L28U3248",
      loanType: "Home Loan",
      borrower: "Priyansh Chanda",
      borrowerAddress: "24, Ray Chowk Gumala-806332",
      coBorrower1Name: "Zain Ghosh",
      coBorrower1Address: "H.No. 58, Dugar Street Kolhapur-343500",
      currentDPD: "100",
      sanctionAmount: "₹ 2681712",
      region: "West",
      status: "AP",
    },
    {
      id: "L28U3260",
      loanType: "Home Loan",
      borrower: "Hridika Sen",
      borrowerAddress: "84/36 Borad, Hubi-Dharwad-408790",
      coBorrower1Name: "Shray Kala",
      coBorrower1Address: "63/66, Bharadwaj Street Bokaro-862204",
      currentDPD: "100",
      sanctionAmount: "₹ 4456808",
      region: "West",
      status: "R",
    },
    {
      id: "L28U3265",
      loanType: "Personal Loan",
      borrower: "Vinaan Vrik",
      borrowerAddress: "H.No. 653 Gada Ganj Ichhalkaranji-279923",
      coBorrower1Name: "Elakshi Chahal",
      coBorrower1Address: "10/45 Divar Road Jabalpur 962051",
      currentDPD: "76",
      sanctionAmount: "₹ 3863514",
      region: "West",
      status: "M",
    },
    {
      id: "L28U3264",
      loanType: "Car Loan",
      borrower: "Nirvaan Mander",
      borrowerAddress: "543 Singhal Street, Bhilwara Jahanpur Pur-348320",
      coBorrower1Name: "Vibaan Dua",
      coBorrower1Address: "H.No. 115, Saha Road Singrauli 048374",
      currentDPD: "90",
      sanctionAmount: "₹ 1255683",
      region: "South",
      status: "K",
    },
    {
      id: "L28U3266",
      loanType: "Personal Loan",
      borrower: "Nirvi Sahni",
      borrowerAddress: "41/42, Dula, Almora-741195",
      coBorrower1Name: "Dhanik Lalla",
      coBorrower1Address: "48/43, Garde Path Uduberia 709856",
      currentDPD: "75",
      sanctionAmount: "₹ 2687368",
      region: "East",
      status: "WB",
    },
    {
      id: "L28U3267",
      loanType: "Personal Loan",
      borrower: "Samaira Jain",
      borrowerAddress: "79/10 Barar Zila Thoothukudi-606938",
      coBorrower1Name: "Chirag Tripathi",
      coBorrower1Address: "23/11 Raver Street, Pandharpur-008035",
      currentDPD: "76",
      sanctionAmount: "₹ 3617148",
      region: "South",
      status: "G",
    },
    {
      id: "L28U3269",
      loanType: "Personal Loan",
      borrower: "Aradhya Jayaraman",
      borrowerAddress: "410, Vohra Zila Moradabad-963541",
      coBorrower1Name: "Shaan Hora",
      coBorrower1Address: "35/43, Bajaj Nagar Nagaon-504713",
      currentDPD: "76",
      sanctionAmount: "₹ 1383439",
      region: "South",
      status: "AP",
    },
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
    },
    sidebar: {
      width: "220px",
      backgroundColor: "white",
      borderRight: "1px solid #e0e0e0",
      display: "flex",
      flexDirection: "column",
      padding: "20px 0",
      height: "100%",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      marginBottom: "20px",
    },
    logoImg: {
      maxWidth: "100%", // Ensures the image does not exceed the container width
      height: "auto", // Maintains aspect ratio
      objectFit: "contain", // Ensures the image scales well
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
      borderLeft: "3px solid #3366ff",
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
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    headerTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#333",
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
      borderBottom: "1px solid #e0e0e0",
      marginBottom: "20px",
    },
    tab: {
      padding: "10px 15px",
      cursor: "pointer",
      color: "#555",
      fontSize: "14px",
    },
    tabActive: {
      color: "#3366ff",
      borderBottom: "2px solid #3366ff",
    },
    searchAndFilters: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
    },
    searchBar: {
      padding: "8px 15px",
      width: "260px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
    },
    filterOptions: {
      display: "flex",
    },
    selectColumns: {
      marginLeft: "10px",
      padding: "8px 15px",
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
    moreFilters: {
      marginLeft: "10px",
      padding: "8px 15px",
      backgroundColor: "#3366ff",
      color: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
    filterIcon: {
      marginRight: "5px",
    },
    selectedInfo: {
      marginBottom: "15px",
      color: "#555",
      fontSize: "14px",
    },
    loansTable: {
      width: "100%",
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      textAlign: "left",
      padding: "10px",
      backgroundColor: "#f8f8f8",
      color: "#555",
      fontWeight: "500",
      borderBottom: "1px solid #e0e0e0",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "10px",
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
      fontSize: "14px",
    },
    paginationButton: {
      padding: "5px 15px",
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      cursor: "pointer",
      marginLeft: "10px",
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
      width: "350px",
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
      fontSize: "18px",
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
    },
    uploadSection: {
      marginTop: "30px",
      borderTop: "1px solid #e0e0e0",
      paddingTop: "20px",
    },
    uploadTitle: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "15px",
    },
    fileInput: {
      marginBottom: "20px",
    },
    uploadButton: {
      backgroundColor: "#3366ff",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      width: "40%",
      marginTop: "10px",
    },
    selectedFileName: {
      fontSize: "14px",
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
        {/* <div style={styles.sidebarFooter}>
          <span>Powered by</span>
          <img
            src={resollectLogo}
            alt="Resollect Logo"
            style={styles.sidebarFooterImg}
          />
        </div> */}
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
              Select Columns <span>&nbsp;&nbsp;▼</span>
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
