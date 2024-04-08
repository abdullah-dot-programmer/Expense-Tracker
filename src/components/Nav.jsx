import React from "react";
import logoMark from "../assets/logomark.svg";
import { Form, NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
const Nav = ({ userName }) => {
  const notify = () => toast("Wow so easy!");
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logoMark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form method="post" action="/logout">
          <button
            type="submit"
            className="btn btn--warning"
            onClick={notify}
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault();
              }
            }}
          >
            <span>
              Delete User <MdDelete width={20}></MdDelete>
            </span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
