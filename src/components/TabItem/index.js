// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const changeTab = () => {
    updateActiveTabId(tabId)
  }
  const tabButton = isActive ? 'tab-btn-2' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${tabButton}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
