import { useState } from "react";

export default function useDropdown() {
    const [show, setShow] = useState(false);
    return { show, setShow }
}