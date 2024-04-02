import "./Member.css";
function MemberDetailModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>
          {member.name} - {member.role}
        </h2>
        <p>{member.bio}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default MemberDetailModal;
