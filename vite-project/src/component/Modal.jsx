import { useState } from 'react'
import './modal.css'

function Modal() {
    function openModal() {
        var modal = document.getElementById("modalBackground");
        modal.style.display = "flex";
        console.log("모달이 켜짐");
    }

    function closeModal() {
        var modal = document.getElementById("modalBackground");
        modal.style.display = "none";
        console.log("모달이 꺼짐");
    }

    return (
        <>
            <div id="modalBackground" className="modal-background">
                <div className="modal-content">
                    <h2>안녕하세요</h2>
                    <p>모달 내용은 어쩌고 저쩌고</p>
                    <button onClick={closeModal}>닫기</button>
                </div>
            </div>
            <h1>안녕하세요!</h1>
            <h5>내용내용내용</h5>
            <button onClick={openModal}>버튼 열기</button>
        </>
    )
}

export default Modal
