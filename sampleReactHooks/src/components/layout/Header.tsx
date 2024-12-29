import { Home } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Demo site</h1>
        <div className="nav">
          <a href="/" className="home-link">
            <Home className="home-icon" />
          </a>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="menu-button">メニュー</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="dropdown-content">
                <DropdownMenu.Item className="dropdown-item">
                  <a href="#useActionState">useActionState</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="dropdown-item">
                  <a href="/services">サービス</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="dropdown-item">
                  <a href="/contact">お問い合わせ</a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}
