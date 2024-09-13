import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextCell1.module.css";

const TextCell1 = ({
  className = "",
  setNewTask,
  addTask,
  claritynotificationLine,
  birepeat,
  iconoircalendar,
  propBackground,
  propBackgroundColor,
  propBorderTop,
  propColor,
  propLeft,
  propBackgroundColor1,
  propColor1,
}) => {
  const textCell1Style = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
      borderTop: propBorderTop,
      position: 'fixed', 
      top : 100,
      left: '350px', 
     
      width: 'calc(100% - 350px)',

      zIndex: 1000, // Ensure it's on top of other elements
    };
  }, [propBackground, propBackgroundColor, propBorderTop]);

  const addATask2Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const menuItem2Style = useMemo(() => {
    return {
      top : "-50px",
      cursor : 'pointer',
      left: propLeft,
      backgroundColor: propBackgroundColor1,
    };
  }, [propLeft, propBackgroundColor1]);

  const label2Style = useMemo(() => {
    return {
      // bottom : "90px",
      padding : "20px" , bottom : "-2px",
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      // style={{paddingLeft:"100px"}}
      className={[styles.textCell, className].join(" ")}
      style={textCell1Style}
    >
      <div className={styles.addATaskParent}>
        <div className={styles.addATask} style={addATask2Style}>
          {/* Add A Task */}
          <input
            type="text"
            onChange={setNewTask}
            placeholder=" Add A Task"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
            
              width: '100%', 
              height: '50px', 
            }}
          />
        </div>
        <div className={styles.claritynotificationLineParent}>
          <img
            className={styles.claritynotificationLineIcon}
            alt=""
            src={claritynotificationLine}
          />
          <img className={styles.birepeatIcon} alt="" src={birepeat} />
          <img
            className={styles.iconoircalendar}
            alt=""
            src={iconoircalendar}
          />
          <div className={styles.menuItem} style={menuItem2Style} onClick={addTask}>
            <div className={styles.label} style={label2Style}>
              ADD TASK
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

TextCell1.propTypes = {
  className: PropTypes.string,
  claritynotificationLine: PropTypes.string,
  birepeat: PropTypes.string,
  iconoircalendar: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorderTop: PropTypes.any,
  propColor: PropTypes.any,
  propLeft: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propColor1: PropTypes.any,
};

export default TextCell1;
